Fairs = new Mongo.Collection('fairs');

SponsorSchema = new SimpleSchema({
  name: { type: String },
  tel: { type: String },
  fax: { type: String },
  email: { type: String, regEx: SimpleSchema.RegEx.Email }
});

AdSchema = new SimpleSchema({
  name: { type: String },
  url: { type: String, regEx:SimpleSchema.RegEx.WeakDomain },
  pic: { type: [String], optional: true }
});

var Schemas = {};
Schemas.Fair = new SimpleSchema({
  chnName: { type: String },
  engName: { type: String },
  time: { type: Date },
  position: { type: String },
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

