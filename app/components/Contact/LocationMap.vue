<script setup>
const center = [-1.048192822938855, 37.104624994721625]
</script>

<template>
  <div>
    <!-- -1.048192822938855, 37.104624994721625 -->
    <LMap
      style="height: 450px"
      :zoom="12"
      :center="center"
      :use-global-leaflet="false"
    >
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />

      <LMarker :lat-lng="center" />
    </LMap>
  </div>
</template>

<style></style>
