<template>
    <div>
        <Header></Header>
<!--        <EMap></EMap>-->
        <AMap></AMap>
<!--        <Footer></Footer>-->
    </div>
</template>
<script>
    import AMap from "../components/AMap";
    import Header from "../components/Header";
    // import Footer from "../components/Footer";
    // import EMap from "../components/EMap";

    export default {
        name:'Map',
        components:{
            // EMap,
            AMap,
            Header,
            // Footer
        }
    }

</script>
