import mongoose from 'mongoose';

const TechnicalDebtSchema = new mongoose.Schema({
    filename: String,
    filehash: Number,
    analysis_report: mongoose.SchemaTypes.ObjectId,
    reference: String,
    commit: String,
    commit_date: Date,
    repository: mongoose.SchemaTypes.ObjectId,
    indicators: [{
        name: String,
        occurrences: Number
    }],
    debts: [{
        name: String,
        value: Number
    }],
    responsible: String,
    description: String,
    intentional: Number,
    principal: Number,
    interest: Number,
    interest_probability: Number,
    checked: Boolean,
    estimate: Number
});

/**
 * @typedef TechnicalDebtModel
 */
export default mongoose.model('TechnicalDebtModel', TechnicalDebtSchema, 'rm_technical_debt');
