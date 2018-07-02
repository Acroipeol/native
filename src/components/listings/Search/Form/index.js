import {Component} from 'react'

import * as format from '@/assets/format'
import Form from '@/components/shared/Form/Form'
import Field, {SlideRange, MultiSelect, ListingType} from '../Field'

export default class SearchForm extends Component {
  onReset = (field) => () => {
    const {onChange, value} = this.props
    onChange({...value, [field]: undefined})
  }

  render() {
    const {value, onChange, onSubmit, onPressNeighborhoods} = this.props
    return (
      <Form onChange={onChange} onSubmit={onSubmit} value={value}>
        <Field title="Bairros" onReset={this.onReset('neighborhoods')}>
          <MultiSelect
            name="neighborhoods"
            title="Ver bairros"
            onPress={onPressNeighborhoods}
          />
        </Field>
        <Field title="Tipo de imóvel" onReset={this.onReset('types')}>
          <ListingType name="types" />
        </Field>
        <Field title="Preço" onReset={this.onReset('price')}>
          <SlideRange
            name="price"
            step={100000}
            min={100000}
            max={10000000}
            renderLabel={(value) => `R$ ${format.abbrevPrice(value)}`}
          />
        </Field>
        <Field title="Área" onReset={this.onReset('area')}>
          <SlideRange
            name="area"
            max={1000}
            step={10}
            renderLabel={(value) => `${value} m²`}
          />
        </Field>
        <Field title="Quartos" onReset={this.onReset('rooms')}>
          <SlideRange
            name="rooms"
            min={1}
            max={4}
            renderLabel={(value) => (value === 4 ? '+4' : value)}
          />
        </Field>
        <Field title="Vagas de garagem" onReset={this.onReset('garage_spots')}>
          <SlideRange
            name="garage_spots"
            min={1}
            max={4}
            renderLabel={(value) => (value === 4 ? '+4' : value)}
          />
        </Field>
      </Form>
    )
  }
}
