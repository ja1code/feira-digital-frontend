<template>
<div class="bana">
  <div id="Search">
  </div>
    <h1 class="logo"><b>Feira digital</b></h1>
    <p id="f-header">Você buscou por: </p>
    <h2 id="f-header">Mi Band 4</h2>
    <div class="container">
      <div class="row">
        <div class="col">
          <img src="../assets/miBand.webp">
          <p id="f-card-format">Banca do zé 
            <br>Mi Band 4 
            <br> <a href="">COMO CHEGAR</a>
          </p>
        </div>
        <div class="col">
          <img src="../assets/miBand.webp">
          <p id="f-card-format">Eletrônicos legais 
            <br>Mi Band 4 
            <br> <a href="">COMO CHEGAR</a>
          </p>
        </div>
      </div>
      <div class="opac">aaaaaaaaaa</div>
    </div>
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

<style scoped>

@import url("../style/style.css");
.opac{
  opacity: .3;
}
div{
  position: relative;
}
.container{
  text-align: center; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.logo{
  text-align: center;
  margin-bottom: 1%;
  color: white;
  font-size: 3.4rem !important;
  text-shadow: 3px 3px 3px rgba(0, 0, 0, .2);
}
h2{
  font-size: 2.4em;
}
img{
  max-width: 80%;
  border-radius: 5px 5px 0px 0px;
  box-shadow: 3px 0px 3px rgba(0, 0, 0, .3)
}
.col{
  font-size: .77em;
}
a{
  text-decoration: none;
  color:white;
}
#f-card-format{
  margin-left: 10%;
  width: 80.1%;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, .3);
}
</style>

