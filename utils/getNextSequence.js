// utils/getNextSequence.js
import Counter from "../models/Counter.js";

export async function getNextSequence(sequenceName) {
  const counter = await Counter.findByIdAndUpdate(
    sequenceName,
    { $inc: { seq: 1 } },
    { new: true, upsert: true },
  );
  return String(counter.seq).padStart(4, "0");
}
