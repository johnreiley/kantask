import ListTab from './ListTab.vue';

export default {
  title: 'ListTab',
  component: ListTab
};

const Template = (args) => ({
  components: { ListTab },
  props: { args },
  template: '<list-tab v-bind="$props" />'
});

export const ListTabBasic = Template.bind({});

export const ListTabCount = Template.bind({});
ListTabCount.args = {
  count: 12
}

const args = {
  count: Math.floor(Math.random() * 20),
  active: true
}

export const ListTabRed = Template.bind({});
ListTabRed.args = {
  ...args,
  color: 'red',
}
export const ListTabOrange = Template.bind({});
ListTabOrange.args = {
  ...args,
  color: 'orange',
}
export const ListTabYellow = Template.bind({});
ListTabYellow.args = {
  ...args,
  color: 'yellow',
}
export const ListTabGreen = Template.bind({});
ListTabGreen.args = {
  ...args,
  color: 'green',
}
export const ListTabTurqoise = Template.bind({});
ListTabTurqoise.args = {
  ...args,
  color: 'turqoise',
}
export const ListTabBlue = Template.bind({});
ListTabBlue.args = {
  ...args,
  color: 'blue',
}
export const ListTabPurple = Template.bind({});
ListTabPurple.args = {
  ...args,
  color: 'purple',
}
export const ListTabMagenta = Template.bind({});
ListTabMagenta.args = {
  ...args,
  color: 'magenta',
}

