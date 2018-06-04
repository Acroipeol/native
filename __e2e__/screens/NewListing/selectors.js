export const input = (label) => by.type('RCTUITextField').and(by.label(label))
export const navButton = () =>
  by.label('Anunciar').withAncestor(by.id('@shared.Shell.Navigation'))
export const addressScreen = () => by.id('@newListing.Address')
export const propertiesScreen = () => by.id('@newListing.Properties')
export const successScreen = () => by.id('@newListing.Success')
export const autoComplete = () => by.id('@newListing.Address.AutoComplete')
export const autoCompleteOptions = () =>
  by.type('RCTView').withAncestor(autoComplete())
export const autoCompleteInput = () => input('Endereço autocomplete')
