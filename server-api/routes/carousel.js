const express = require('express');
const router = express.Router();
const _ = require('lodash');

router.get('/', function(req, res, next) {

    // Set slide max number to 10
    const slides = Math.min(parseInt((req.query?.slides ?? 10)), 10);

    const slideArray = [
        {
            image: 'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80',
            title: 'Snowy Mountain',
            subTitle: 'Nepal'
        },
        {
            image: 'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
            title: 'Lake Tekapo',
            subTitle: 'New Zealand'
        },
        {
            image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            title: 'Wild Sea',
            subTitle: 'Italy'
        },
        {
            image: 'https://images.unsplash.com/photo-1502085671122-2d218cd434e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2126&q=80',
            title: 'Skelling',
            subTitle: 'Ireland'
        },
        {
            image: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            title: 'Ghode Pani',
            subTitle: 'Nepal'
        },
        {
            image: 'https://images.unsplash.com/photo-1477948879622-5f16e220fa42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            title: 'Saleve',
            subTitle: 'France'
        },
        {
            image: 'https://images.unsplash.com/photo-1611252871536-305c663777ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
            title: 'Gemeinde Eben am Achensee',
            subTitle: 'Austria'
        },
        {
            image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2011&q=80',
            title: 'Moraine Lake',
            subTitle: 'Canada'
        },
    ];

    const mappedSlides = _.slice(slideArray, 0, slides);

    // In case available slides is less than requested slides
    if (slides > slideArray.length) {

        for (let num of _.range(0, (slides - slideArray.length))) {
            mappedSlides.push({
                image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
                title: `No Image Available ${num + 1}`,
                subTitle: null
            });
        }

    }

    res
        .status(200)
        .json(
            {
                code: 200, 
                message: 'Ok', 
                data: { 
                    slides : mappedSlides 
                }
            }
        );

});

module.exports = router;
