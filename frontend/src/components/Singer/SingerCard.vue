<template>
  <div class="singer-card">
    <article class="card">
      <header class="card__thumb">
        <img :src="img">
      </header>

      <div class="card__body">
        <div class="card__category">{{type}}</div>
        <h2 class="card__title">{{title}}</h2>
        <div class="card__subtitle">{{subtitle}}</div>
        <p class="card__description">
          <slot></slot>
        </p>
      </div>

      <footer class="card__footer">
        <slot name="footer"></slot>
      </footer>
    </article>
  </div>
</template>

<script>
  export default {
    name : "OrderCard",
    props: ['img', 'type', 'title', 'subtitle']
  }
</script>

<style lang='scss' rel="stylesheet/scss" type="text/scss">
  .singer-card {
    .card {
      width: 300px;
      background-color: #fff;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      -webkit-transition: box-shadow 0.5s;
      transition: box-shadow 0.5s;
      border-radius: 6px;
    }

    .card:hover {
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
    }

    /**
    * DATE
    **/
    .card__date {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 45px;
      height: 45px;
      padding-top: 10px;
      background-color: coral;
      border-radius: 50%;
      color: #fff;
      text-align: center;
      font-weight: 700;
      line-height: 13px;
    }

    .card__date__day {
      font-size: 14px;
    }

    .card__date__month {
      text-transform: uppercase;
      font-size: 10px;
    }

    /**
    * THUMB
    **/
    .card__thumb {
      height: 245px;
      overflow: hidden;
      background-color: #000;
      -webkit-transition: height 0.5s;
      transition: height 0.5s;
      border-bottom: 1px solid #ececec;
    }

    .card__thumb img {
      width: 300px;
      display: block;
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transition: opacity 0.5s, -webkit-transform 0.5s;
      transition: opacity 0.5s, -webkit-transform 0.5s;
      transition: opacity 0.5s, transform 0.5s;
      transition: opacity 0.5s, transform 0.5s, -webkit-transform 0.5s;
    }

    .card:hover .card__thumb {
      height: 130px;
    }

    .card:hover .card__thumb img {
      opacity: 0.6;
      -webkit-transform: scale(1.2);
      transform: scale(1.2);
    }

    /**
    * BODY
    **/
    .card__body {
      position: relative;
      height: 175px;
      padding: 20px;
      -webkit-transition: height 0.5s;
      transition: height 0.5s;
    }

    .card:hover .card__body {
      height: 290px;
    }

    .card__category {
      position: absolute;
      top: -25px;
      left: 0;
      height: 25px;
      padding: 0 15px;
      background-color: coral;
      color: #fff;
      text-transform: uppercase;
      font-size: 11px;
      line-height: 25px;
    }

    .card__title {
      margin: 0;
      padding: 0 0 10px 0;
      color: #000;
      font-size: 22px;
      font-weight: bold;
      text-transform: uppercase;
    }

    .card__subtitle {
      margin: 0;
      padding: 0 0 10px 0;
      font-size: 19px;
      color: coral;
    }

    .card__description {
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 56px;
      margin: 0;
      padding: 0;
      color: #666C74;
      line-height: 27px;
      opacity: 0;
      -webkit-transform: translateY(45px);
      transform: translateY(45px);
      -webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
      transition: opacity 0.3s, -webkit-transform 0.3s;
      transition: opacity 0.3s, transform 0.3s;
      transition: opacity 0.3s, transform 0.3s, -webkit-transform 0.3s;
      -webkit-transition-delay: 0s;
      transition-delay: 0s;
    }

    .card:hover .card__description {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-transition-delay: 0.2s;
      transition-delay: 0.2s;
    }

    .card__footer {
      font-size: 11px;
      color: #A3A9A2;
    }

    .icon {
      display: inline-block;
      vertical-align: middle;
      margin: -2px 0 0 2px;
      font-size: 18px;
    }

    .icon + .icon {
      padding-left: 10px;
    }
  }
</style>
