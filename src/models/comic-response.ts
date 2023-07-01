import { CharacterList, ComicSummary, CreatorList, EventList, Image, SeriesSummary, StoryList, Url } from "./common"

export type ComicDataWrapper = {
  code?: number //The HTTP status code of the returned result.,
  status?: string // A string description of the call status.,
  copyright?: string //The copyright notice for the returned result.,
  attributionText?: string //The attribution notice for this result. Please display either this notice or the contents of the attributionHTML field on all screens which contain data from the Marvel Comics API.,
  attributionHTML?: string // An HTML representation of the attribution notice for this result. Please display either this notice or the contents of the attributionText field on all screens which contain data from the Marvel Comics API.,
  data?: ComicDataContainer // The results returned by the call.,
  etag?: string // A digest value of the content returned by the call.
}
export type ComicDataContainer = {
  offset?: number //The requested offset (number of skipped results) of the call.,
  limit?: number // The requested result limit.,
  total?: number //The total number of resources available given the current filter set.,
  count?: number //The total number of results returned by this call.,
  results?: Comic[] //The list of comics returned by the call
}
export type Comic = {
  id?: number // The unique ID of the comic resource.,
  digitalId?: number // The ID of the digital comic representation of this comic. Will be 0 if the comic is not available digitally.,
  title?: string // The canonical title of the comic.,
  issueNumber?: number // The number of the issue in the series (will generally be 0 for collection formats).,
  variantDescription?: string //If the issue is a variant (e.g. an alternate cover, second printing, or director’s cut), a text description of the variant.,
  description?: string  //The preferred description of the comic.,
  modified?: string // The date the resource was most recently modified.,
  isbn?: string // The ISBN for the comic (generally only populated for collection formats).,
  upc?: string //The UPC barcode number for the comic (generally only populated for periodical formats).,
  diamondCode?: string // The Diamond code for the comic.,
  ean?: string // The EAN barcode for the comic.,
  issn?: string // The ISSN barcode for the comic.,
  format?: string // The publication format of the comic e.g. comic, hardcover, trade paperback.,
  pageCount?: number // The number of story pages in the comic.,
  textObjects?:TextObject[] //A set of descriptive text blurbs for the comic.,
  resourceURI?: string // The canonical URL identifier for this resource.,
  urls?: Url[] //A set of public web site URLs for the resource.,
  series?: SeriesSummary //A summary representation of the series to which this comic belongs.,
  variants?: ComicSummary[] //A list of variant issues for this comic (includes the "original" issue if the current issue is a variant).,
  collections?: ComicSummary[] // A list of collections which include this comic (will generally be empty if the comic's format is a collection).,
  collectedIssues?: ComicSummary[] // A list of issues collected in this comic (will generally be empty for periodical formats such as "comic" or "magazine").,
  dates?: ComicDate[] //A list of key dates for this comic.,
  prices?: ComicPrice[] //A list of prices for this comic.,
  thumbnail?: Image //The representative image for this comic.,
  images?: Image[] //A list of promotional images associated with this comic.,
  creators?: CreatorList //A resource list containing the creators associated with this comic.,
  characters?: CharacterList //A resource list containing the characters which appear in this comic.,
  stories?: StoryList //A resource list containing the stories which appear in this comic.,
  events?: EventList  //A resource list containing the events in which this comic appears.
}

export type TextObject = {
  type?: string //The canonical type of the text object (e.g. solicit text, preview text, etc.).,
  language?: string //The IETF language tag denoting the language the text object is written in.,
  text?: string //The text.
}

export type ComicDate = {
  type?: string //A description of the date (e.g. onsale date, FOC date).,
  date?: string //The date.
}
export type ComicPrice = {
  type?: string //A description of the price (e.g. print price, digital price).,
  price?: number  //The price (all prices in USD).
}
