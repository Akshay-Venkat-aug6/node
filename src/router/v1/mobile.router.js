import express from "express";
import validate from '../../validation/mobile.validation';
import {
    addMobileDevice
} from '../../controller/mobile.controller';

const router = express.Router();

router.post('/', validate.add_mobile, addMobileDevice);

export default router