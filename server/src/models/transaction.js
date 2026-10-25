import mongoose from 'mongoose';
const schema = new mongoose.Schema({
  title: { type: String, required: true },
  amount: { type: Number, required: true, min: 0 },
  kind: { type: String, required: true, enum: ["Income", "Expense"] },
  category: { type: String, required: true, enum: ["Food", "Travel", "Education", "Bills", "Salary", "Shopping", "Other"] },
  date: { type: String, required: true },
  notes: { type: String }
}, { timestamps: true, versionKey: false });
export default mongoose.model('Transaction', schema);
