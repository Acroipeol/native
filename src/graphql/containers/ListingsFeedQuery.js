import _ from 'lodash/fp'
import update from 'immutability-helper'
import {Query} from 'react-apollo'

import {GET_LISTINGS_FEED} from '@/graphql/modules/listings/queries'
import {withBlacklistedListingIDs} from './BlacklistQuery'

const getIDs = _.map(_.get('id'))

const ListingsFeedQuery = withBlacklistedListingIDs(function ListingsFeedQuery({
  blacklist,
  filters,
  pageSize,
  children,
  fetchPolicy
}) {
  return (
    <Query
      key={JSON.stringify(filters)}
      query={GET_LISTINGS_FEED}
      fetchPolicy={fetchPolicy}
      variables={{filters, pageSize}}
    >
      {({fetchMore, updateQuery, data = {}, ...response}) =>
        children({
          ...response,
          data,
          fetchMore: _.once(() =>
            fetchMore({
              variables: {
                filters,
                pageSize,
                exclude: data.listings ? getIDs(data.listings.listings) : []
              },
              updateQuery: updateListings()
            })
          ),
          updateBlacklists: () => updateQuery(updateBlacklists({blacklist}))
        })
      }
    </Query>
  )
})

const updateListings = () => (prev, {fetchMoreResult}) =>
  update(prev, {
    listings: {
      listings: {$push: fetchMoreResult.listings.listings},
      remainingCount: {$set: fetchMoreResult.listings.remainingCount}
    }
  })

const updateBlacklists = ({blacklist}) => (prev) => {
  const blacklistIds = _.map(_.get('id'))(blacklist.data)
  if (_.isEmpty(prev) || _.isEmpty(blacklistIds)) return prev
  return update(prev, {
    listings: {
      listings: {
        $apply: (listings) =>
          listings.filter(({id}) => !blacklistIds.includes(String(id)))
      }
    }
  })
}

ListingsFeedQuery.defaultProps = {
  filters: {}
}

export const withListingsFeed = (options = {}) => (Target) => (props) => (
  <ListingsFeedQuery {...props} {...options}>
    {({data: {listings}, ...response}) => (
      <Target
        {...props}
        listingsFeed={{
          loading: response.loading,
          data: listings ? listings.listings : [],
          remainingCount: listings ? listings.remainingCount : undefined,
          refetch: response.refetch,
          fetchMore: response.fetchMore,
          updateBlacklists: response.updateBlacklists
        }}
      />
    )}
  </ListingsFeedQuery>
)
