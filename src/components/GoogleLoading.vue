<template>
  <div class="content">
    <div class="column">
      <div class="container animation-2">
        <div class="shape shape1"></div>
        <div class="shape shape2"></div>
        <div class="shape shape3"></div>
        <div class="shape shape4"></div>
      </div>
    </div>
  </div>
</template>
<script src="http://www.jq22.com/jquery/jquery-1.10.2.js"></script>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.content {
  max-width: 600px;
  margin: auto;
  padding: 5px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-start;
}
.content .column {
  position: absolute;
  margin: 5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 30px;
  height: 30px;
  position: relative;
}
.container.animation-1 {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}
.container.animation-2, .container.animation-4 {
  -webkit-transform: rotate(10deg);
          transform: rotate(10deg);
}
.container.animation-2 .shape, .container.animation-4 .shape {
  border-radius: 5px;
}
.container.animation-2, .container.animation-3, .container.animation-4 {
  -webkit-animation: rotation 1s infinite;
          animation: rotation 1s infinite;
}
.container .shape {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 1px;
}
.container .shape.shape1 {
  left: 0;
  background-color: #5C6BC0;
}
.container .shape.shape2 {
  right: 0;
  background-color: #8BC34A;
}
.container .shape.shape3 {
  bottom: 0;
  background-color: #FFB74D;
}
.container .shape.shape4 {
  bottom: 0;
  right: 0;
  background-color: #F44336;
}
@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
  .animation-2 .shape1 {
  -webkit-animation: animation2shape1 0.5s ease 0s infinite alternate;
          animation: animation2shape1 0.5s ease 0s infinite alternate;
}

@-webkit-keyframes animation2shape1 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(20px, 20px);
            transform: translate(20px, 20px);
  }
}

@keyframes animation2shape1 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(20px, 20px);
            transform: translate(20px, 20px);
  }
}
.animation-2 .shape2 {
  -webkit-animation: animation2shape2 0.5s ease 0s infinite alternate;
          animation: animation2shape2 0.5s ease 0s infinite alternate;
}

@-webkit-keyframes animation2shape2 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(-20px, 20px);
            transform: translate(-20px, 20px);
  }
}

@keyframes animation2shape2 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(-20px, 20px);
            transform: translate(-20px, 20px);
  }
}
.animation-2 .shape3 {
  -webkit-animation: animation2shape3 0.5s ease 0s infinite alternate;
          animation: animation2shape3 0.5s ease 0s infinite alternate;
}

@-webkit-keyframes animation2shape3 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(20px, -20px);
            transform: translate(20px, -20px);
  }
}

@keyframes animation2shape3 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(20px, -20px);
            transform: translate(20px, -20px);
  }
}
.animation-2 .shape4 {
  -webkit-animation: animation2shape4 0.5s ease 0s infinite alternate;
          animation: animation2shape4 0.5s ease 0s infinite alternate;
}

@-webkit-keyframes animation2shape4 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(-20px, -20px);
            transform: translate(-20px, -20px);
  }
}

@keyframes animation2shape4 {
  from {
    -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
  }
  to {
    -webkit-transform: translate(-20px, -20px);
            transform: translate(-20px, -20px);
  }
}
</style>