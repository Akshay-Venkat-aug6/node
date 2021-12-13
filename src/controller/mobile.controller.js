import { validationResult } from 'express-validator';
import { _mobile } from '../model/mobile.model';

exports.addMobileDevice = async (req, res) => {
    // Check the Error
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            success: false,
            errors: errors.array()
        });
    };

    const response = await _mobile.create({ ...req.body});;

    return res.status(200).json({
        success: true,
        data: response
    })

}