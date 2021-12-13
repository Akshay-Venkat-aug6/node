import { check, validationResult } from 'express-validator';

const validate = {
    add_mobile: [
        check('mobile_name', 'Mobile Name is Required')
            .not()
            .isEmpty(),
        check('brand', 'Brand Name is Required')
            .not()
            .isEmpty(),
        check('type', 'Mobile Type is Required')
            .not()
            .isEmpty(),
        check('os', 'Mobile OS is Required')
            .not()
            .isEmpty(),
        check('width', 'Mobile Width is Required')
            .not()
            .isEmpty(),
        check('height', 'Mobile Height is Required')
            .not()
            .isEmpty(),
        check('storage', 'Mobile Storage is Required')
            .not()
            .isEmpty(),
        check('battery', 'Mobile Battery is Required')
            .not()
            .isEmpty(),
        check('display_size', 'Display Size is Required')
            .not()
            .isEmpty()
    ]
};

export default validate;