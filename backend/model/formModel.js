import mongoose from 'mongoose';

const { Schema } = mongoose;

const options = new Schema({
  reactKey: { type: String},
  value : { type: String},
  display :{ type: String}
})

const InformationSchema = new Schema({
  comp: { type: String},
  isRequired: { type: Boolean},
  valuePath: { type: String},
  props: {
    id: { type: String},
    label: { type: String},
    sublabel: { type: String},
    placeholder: { type: String},
    options: [options],
    value: { type: String } 
  }
});

const MainSchema = new Schema({
  main_id: { type: String}, 
  informationForm: [InformationSchema]
});

const MainModel = mongoose.model('MainModel', MainSchema);

export default MainModel;
