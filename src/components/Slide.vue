<template>
    <div class="rev-slider">
        <div class="fullwidthbanner-container">
            <div class="fullwidthbanner">
                <div class="bannercontainer">
                    <div class="banner">
                        <ul>
                            <li
                                v-for="product in dataSlide"
                                :key="product.id"
                                data-transition="boxfade"
                                data-slotamount="20"
                                class="active-revslide"
                                style="width: 100%; height: 100%; overflow: hidden; z-index: 18; visibility: hidden; opacity: 0;"
                            >
                                <div
                                    class="slotholder"
                                    style="width:100%;height:100%;"
                                    data-duration="undefined"
                                    data-zoomstart="undefined"
                                    data-zoomend="undefined"
                                    data-rotationstart="undefined"
                                    data-rotationend="undefined"
                                    data-ease="undefined"
                                    data-bgpositionend="undefined"
                                    data-bgposition="undefined"
                                    data-kenburns="undefined"
                                    data-easeme="undefined"
                                    data-bgfit="undefined"
                                    data-bgfitend="undefined"
                                    data-owidth="undefined"
                                    data-oheight="undefined"
                                >
                                    <div
                                        class="tp-bgimg defaultimg"
                                        data-lazyload="undefined"
                                        data-bgfit="cover"
                                        data-bgposition="center center"
                                        data-bgrepeat="no-repeat"
                                        data-lazydone="undefined"
                                        :style="{
                                            backgroundImage: `url(../image/slide/${product.image})`,
                                            backgroundColor: 'rgba(0, 0, 0, 0)',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center center',
                                        }"
                                    ></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="tp-bannertimer"></div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            dataSlide: [],
            loading: false,
            error: null,
        };
    },
    created() {
        this.fetchProducts();
    },
    methods: {
        async fetchProducts() {
            this.loading = true;
            this.error = null;
            try {
                const responseSlide = await axios.get("http://localhost:3000/slide");
                this.dataSlide = responseSlide.data;
            } catch (err) {
                this.error = "Không thể tải danh sách sản phẩm.";
            } finally {
                this.loading = false;
            }
        },
    },
};
</script>
