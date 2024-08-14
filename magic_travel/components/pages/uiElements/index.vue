<template>
  <main>
    <section class="layout-pt-md layout-pb-md">
      <div class="container">
        <div class="row y-gap-30">
          <Faq />

          <Tabs />
        </div>
      </div>
    </section>

    <section class="layout-pt-md layout-pb-md">
      <div class="container">
        <div class="row y-gap-30">
          <Table />

          <MessageBoxes />
        </div>
      </div>
    </section>

    <section class="layout-pt-md layout-pb-md">
      <div class="container">
        <div class="row y-gap-30">
          <Buttons />
        </div>
      </div>
    </section>

    <Form />

    <TypoGraphy />
  </main>
</template>
<script setup>
import Faq from "./Faq";
import Tabs from "./Tabs";
import Table from "./Table";
import MessageBoxes from "./MessageBoxes";
import Buttons from "./Buttons";
import Form from "./Form";
import TypoGraphy from "./TypoGraphy";
</script>
