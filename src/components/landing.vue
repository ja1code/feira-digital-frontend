<template>
<div class="bgLanding container-fluid">
    <h1 class="titleLanding"><b>Feira Digital</b></h1>
        <p><b>O que está procurando?</b></p>
        <form action="" method="get">
            <input type="search" name="produto" id="produto" placeholder="Ex: Iphone 256gb" size='30%'>
        <!--<input type="submit" value="Pesquisar">-->
        </form> 
    <p style="padding: 2%;">ou</p>
    <a class=aLand href="http://">Pesquise no mapa</a>

</div>

</template>

<script>


export default {
    data(){
        return{

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../style/style.css");
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
/*a{
    text-decoration: none;
    color:rgb(221, 215, 215);
}
input{
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-size: 1em;
}
h1{
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 3.5em;
    padding-top: 50%;
}
.bg{
    font-family: 'Open Sans', sans-serif;
    color:whitesmoke;
    height: 100vh;
    background-size: cover;
    background: linear-gradient(180deg, #FFA800 0%, rgba(255, 255, 255, 0) 100%), #F97700;
    text-align: center;
}*/

</style>
