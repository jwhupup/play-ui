<template>
  <div space-y-2>
    <div fscw gap-6>
      <pl-badge :value="6">
        <pl-button>button</pl-button>
      </pl-badge>
      <pl-badge value="66">
        <pl-button>button</pl-button>
      </pl-badge>
      <pl-button>
        <span mr-1>button</span>
        <pl-badge value="166" />
      </pl-button>
      <pl-button>
        <span mr-1>button</span>
        <pl-badge :max="200" value="166" />
      </pl-button>
    </div>
  </div>
</template>
