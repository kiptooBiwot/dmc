export default defineAppConfig({
  ui: {
    colors: {
      // primary: 'midnight',
      primary: 'golden-sand',
      secondary: 'cornflower',
      tertiary: 'trinidad',
      accent: 'golden',
    },
    button: {
      default: {
        loadingIcon: 'i-lucide-loader',
      },
      slots: {
        base: '',
      },
      compoundVariants: [
        {
          color: 'bg-accent-600',
          variant: 'outline',
          class: 'ring-default hover:bg-accented',
        },
      ],
      // variants: {
      //   variant: {
      //     solid:
      //       'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-600',
      //   },
      // },
    },
  },
})
