export type  Url = {
  type?: string // A text identifier for the URL.,
  url: string// A full URL (including scheme, domain, and path).
}
export type  Image = {
  path?: string // The directory path of to the image.,
  extension?: string // The file extension for the image.
}
export type ComicList = {
  available?: number // The number of total available issues in this list. Will always be greater than or equal to the "returned" value.,
  returned?: number // The number of issues returned in this collection (up to 20).,
  collectionURI?: string // The path to the full list of issues in this collection.,
  items?: ComicSummary[] // The list of returned issues in this collection.
}
export type ComicSummary = {
  resourceURI?: string // The path to the individual comic resource.,
  name?: string // The canonical name of the comic.
}
export type StoryList =  {
  available?: number // The number of total available issues in this list. Will always be greater than or equal to the "returned" value.,
  returned?: number // The number of issues returned in this collection (up to 20).,
  collectionURI?: string // The path to the full list of issues in this collection.,
  items?: StorySummary[] // The list of returned issues in this collection.
}
export type  StorySummary = {
  resourceURI?: string // The path to the individual story resource.,
  name?: string // The canonical name of the story.,
  type?: string // The type of the story (interior or cover).
}
export type EventList = {
    available?: number // The number of total available events in this list. Will always be greater than or equal to the "returned" value.,
    returned?: number // The number of events returned in this collection (up to 20).,
    collectionURI?: string // The path to the full list of events in this collection.,
    items?: EventSummary[] // The list of returned issues in this collection.
}
export type EventSummary = {
  resourceURI?: string// The path to the individual event resource.,
  name?: string // The name of the event.
}
export type SeriesList = {
  available?: number // The number of total available series in this list. Will always be greater than or equal to the "returned" value.,
    returned?: number // The number of series returned in this collection (up to 20).,
    collectionURI?: string // The path to the full list of series in this collection.,
    items?: SeriesSummary[] // The list of returned issues in this collection.
}
export type  SeriesSummary = {
  resourceURI?:string // The path to the individual series resource.,
  name?:string // The canonical name of the series.
}
export type CreatorList = {
  available?: number //The number of total available creators in this list. Will always be greater than or equal to the "returned" value.,
  returned?: number //The number of creators returned in this collection (up to 20).,
  collectionURI?: string //The path to the full list of creators in this collection.,
  items?: CreatorSummary[] //The list of returned creators in this collection.
}
export type CreatorSummary = {
  resourceURI?: string //The path to the individual creator resource.,
  name?: string //The full name of the creator.,
  role?: string //The role of the creator in the parent entity.
}
export type CharacterList = {
  available?: number //The number of total available characters in this list. Will always be greater than or equal to the "returned" value.,
  returned?: number //The number of characters returned in this collection (up to 20).,
  collectionURI?: string //The path to the full list of characters in this collection.,
  items?: CharacterSummary[]  //The list of returned characters in this collection.
  }
export type CharacterSummary = {
  resourceURI?: string //The path to the individual character resource.,
  name?: string //The full name of the character.,
  role?: string //The role of the creator in the parent entity.
}