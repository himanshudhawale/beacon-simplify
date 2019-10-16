const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//discount, name, photo, price, region

const schema = new Schema({
    discount: { type: String, required: true},
    name: { type: String, required: true},
    photo: { type: String, required: true},
    price: { type: String, required: true},
    region: { type: String, required: true}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Product', schema);
