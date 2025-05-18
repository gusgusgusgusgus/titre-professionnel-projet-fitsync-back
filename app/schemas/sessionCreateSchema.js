import Joi from 'joi';


const oneWeekFromNow = new Date();
oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);

export default Joi.object({
  duration: Joi.number().required(),
  date: Joi.date()
    .iso()
    .less(oneWeekFromNow)
    .required()
    .messages({
      'date.base': 'You should send a date',
      'date.less': 'Date can\'t be later than seven days from today',
    }),
  comment: Joi.string()
    .max(1024)
    .messages({ 'string.max': 'Max size for comment: 1024 caracters' }),
  activityId: Joi.number()
    .integer()
    .required()
    .messages({ 'number.base': 'The activity\'s id should be a number' }),
});
