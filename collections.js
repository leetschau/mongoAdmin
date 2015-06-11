var Fairs = new Mongo.Collection('fairs');

var SponsorSchema = new SimpleSchema({
  name: { type: String },
  tel: { type: String },
  fax: { type: String },
  email: { type: String, regEx: SimpleSchema.RegEx.Email }
});

var AdSchema = new SimpleSchema({
  name: { type: String },
  url: { type: String, regEx:SimpleSchema.RegEx.WeakDomain },
  pic: { type: [String], optional: true }
});

var Schemas = {};

Schemas.Fair = new SimpleSchema({
  chnName: { type: String, label: "Chinese Name*" },
  engName: { type: String, label: "English Name*" },
  time: { type: Date, label: "Time (yyyy-mm-dd)*" },
  position: { type: String, label: "Position (Country-City)*" },
  period: { type: Number, min: 0, max: 5, optional: true },
  firstYear: { type: Number, min: 1600, max: 2200, optional: true },
  hallName: { type: String, optional: true },
  sponsors: { type: [SponsorSchema], optional: true },  
  undertakers:  { type: [SponsorSchema], optional: true },
  categories: { type: [String], optional: true },
  lastYearInfo: { type: String, optional: true },
  exhibitionAgent: { type: String, optional: true },
  setupAgent: { type: String, optional: true },
  shippingAgent: { type: String, optional: true },
  website: { type: String, regEx:SimpleSchema.RegEx.WeakDomain, optional: true },
  logo: { type: String, optional: true },
  advertisement: { type: [AdSchema], optional: true }
});

Fairs.attachSchema(Schemas.Fair);

var NoPerPage = 10;

var FairsColl = {
  coll: Fairs,
  displayFields: ['chnName', 'position', 'time']
};

var Books = new Mongo.Collection("books");

Schemas.Book = new SimpleSchema({
  title: { type: String, label: "Titile*" },
  author: { type: String, label: "Author*" },
  copies: { type: Number, label: "Number of copies*" },
  lastCheckedOut: { type: Date, label: "Last checkout date (yyyy-mm-dd)", optional: true },
});

Books.attachSchema(Schemas.Book);

var BooksColl = {
  coll: Books,
  displayFields: ['title', 'author']
};

DataColls = {
  fairs: FairsColl,
  books: BooksColl
}
