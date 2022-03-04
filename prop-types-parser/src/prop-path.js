import _template from 'lodash/template';


export default function getPropPath(name, { parent: { type, path } = { type: 'shape', path: '' }, hidden = false } = {}) {
  return _template(
    type?.startsWith('array')
      ? '{{ base }}[{{ name }}]'
      : name?.search(/\./) > 0
        ? '{{ base }}["{{ name }}"]'
        : '{{ base }}{{ (base && name) ? \'.\' : \'\' }}{{ name }}',
    { interpolate: /{{([\s\S]+?)}}/g }
  )({ base: path, name: hidden ? '*' : name });
}
