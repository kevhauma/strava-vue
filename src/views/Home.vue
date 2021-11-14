<template>
  <main style="height:100%">    
    <mapWrapper style="height:100%"/>
    <Dialog :visible="display" :modal="true" :closable="false" :closeonescape="false" :draggable="false" appendTo="self" style="margin-top: 73px">
    <template #header>
		<h3>Header</h3>
	</template>

	Content

	<template #footer>
		<Button label="No" icon="pi pi-times" class="p-button-text"/>
        <Button label="Yes" icon="pi pi-check" autofocus />
	</template>
</Dialog>

  </main>
</template>

<script>
import mapWrapper from '@/components/map/mapWrapper.vue';

export default {
  name: 'Home',
  data: () => ({
    display:true,
  }),
  components: {
    mapWrapper,
  },
};
</script>
