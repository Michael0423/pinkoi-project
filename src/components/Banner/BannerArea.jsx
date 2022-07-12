import React, { Component } from 'react'
import Banner from './Banner'
import './BannerArea.style.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
export default class BannerArea extends Component {
    render() {
        return (
            <div className="banner">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={100}
                    slidesPerView={1}
                    navigation={true}
                    >
                    <SwiperSlide><Banner></Banner></SwiperSlide>
                    <SwiperSlide><Banner></Banner></SwiperSlide>
                    <SwiperSlide><Banner></Banner></SwiperSlide>
                    <SwiperSlide><Banner></Banner></SwiperSlide>
                </Swiper>
            </div>
        )
    }
}
