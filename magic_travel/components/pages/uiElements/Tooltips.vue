<template>
  <div class="text-22 fw-500 mb-10">Tooltips</div>

  <div class="row x-gap-10 y-gap-10">
    <div class="col-auto">
      <div class="tooltip -top px-30 py-10 bg-light-1 rounded-12">
        Top
        <div class="tooltip__content">Top</div>
      </div>
    </div>

    <div class="col-auto">
      <div class="tooltip -bottom px-30 py-10 bg-light-1 rounded-12 ml-10">
        Bottom
        <div class="tooltip__content">Bottom</div>
      </div>
    </div>

    <div class="col-auto">
      <div class="tooltip -left px-30 py-10 bg-light-1 rounded-12 ml-10">
        Left
        <div class="tooltip__content">Left</div>
      </div>
    </div>

    <div class="col-auto">
      <div class="tooltip -right px-30 py-10 bg-light-1 rounded-12 ml-10">
        Right
        <div class="tooltip__content">Right</div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
