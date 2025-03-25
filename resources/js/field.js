import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-text-toggle', IndexField)
  app.component('detail-text-toggle', DetailField)
  app.component('form-text-toggle', FormField)
})
