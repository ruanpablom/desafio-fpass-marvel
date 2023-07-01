import { ComicList, EventList, Image, SeriesList, StoryList, Url } from "./common"

export type CharacterDataWrapper = {
  code?: number // The HTTP status code of the returned result.,
  status?: string // A string description of the call status.,
  copyright?: string // The copyright notice for the returned result.,
  attributionText?: string // The attribution notice for this result. Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API.,
  attributionHTML?: string // An HTML representation of the attribution notice for this result. Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API.,
  data?: CharacterDataContainer // The results returned by the call.,
  etag?: string // A digest value of the content returned by the call.
}
export type CharacterDataContainer = {
  offset?: number // The requested offset (number of skipped results) of the call.,
  limit?: number // The requested result limit.,
  total?: number // The total number of resources available given the current filter set.,
  count?: number // The total number of results returned by this call.,
  results?: Character[]  //The list of characters returned by the call.
}
export type  Character = {
  id?: number // The unique ID of the character resource.,
  name?: string // The name of the character.,
  description?: string // A short bio or description of the character.,
  modified?: string // The date the resource was most recently modified.,
  resourceURI?: string // The canonical URL identifier for this resource.,
  urls?: Url[] // A set of public web site URLs for the resource.,
  thumbnail?: Image // The representative image for this character.,
  comics?: ComicList // A resource list containing comics which feature this character.,
  stories?: StoryList // A resource list of stories in which this character appears.,
  events?: EventList // A resource list of events in which this character appears.,
  series?: SeriesList // A resource list of series in which this character appears.
}
