import mongoose from 'mongoose';

import ReferenceModel from './../models/reference.model';

exports.findByRepository = (req, res, next) => {
    ReferenceModel.find(
        { repository: mongoose.Types.ObjectId(req.params.repository_id) },
        { commits: { $slice: 1 } }
    )
    .then(r => res.json(r))
    .catch(e => next(e));
}
