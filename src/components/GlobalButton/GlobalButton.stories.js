import GlobalButton from './GlobalButton.vue';

export default {
  title: 'GlobalButton',
  component: GlobalButton
};

const Template = (args) => ({
  components: { GlobalButton },
  props: { args },
  template: '<global-button />'
});

export const GlobalButton = Template.bind({});
GlobalButton.args = {}