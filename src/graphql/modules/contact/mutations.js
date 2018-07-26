import gql from 'graphql-tag'

export const REQUEST_CONTACT = gql`
  mutation requestContact(
    $email: String
    $message: String
    $name: String
    $phone: String
  ) {
    requestContact(
      email: $email
      message: $message
      name: $name
      phone: $phone
    ) {
      email
      message
    }
  }
`
