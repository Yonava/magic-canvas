<script setup lang="ts">
import { useMagicCanvas } from '..';


const magic = useMagicCanvas()

magic.draw.backgroundPattern.value = (ctx, at, alpha) => {
  ctx.fillStyle = alpha ? `rgba(255, 0, 0, ${Number(alpha) / 100})` : 'red';
  ctx.fillRect(at.x, at.y, 10, 10);
}
</script>

<template>
  <MagicCanvas class="bg-amber-400" v-bind="magic.ref" />
</template>
