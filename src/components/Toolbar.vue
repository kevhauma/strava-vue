 <template>
 <Toolbar>
    <template #left>
        <Button label="New" icon="pi pi-plus" class="p-mr-2" />
        <Button label="Upload" icon="pi pi-upload" class="p-button-success" />
        <i class="pi pi-bars p-toolbar-separator p-mr-2" />
        
    </template>

    <template #right>
        <Button icon="pi pi-search" class="p-mr-2" />
        <Button icon="pi pi-calendar" class="p-button-success p-mr-2" />
        <Button icon="pi pi-times" class="p-button-danger" />
    </template>
</Toolbar>
</template>