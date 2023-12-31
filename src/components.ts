/* eslint-disable */
import type { App } from '@vue/runtime-core';
import ToastService from 'primevue/toastservice';
import ConfirmationService from 'primevue/confirmationservice';
import Card from 'primevue/card';
import Calendar from 'primevue/calendar';
import Message from 'primevue/message';
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Toast from 'primevue/toast';
import Panel from 'primevue/panel';
import OverlayPanel from 'primevue/overlaypanel';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import TabMenu from 'primevue/tabmenu';
import Tag from 'primevue/tag';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';
import Image from 'primevue/image';
import Dialog from 'primevue/dialog';
import MultiSelect from 'primevue/multiselect';
import ProgressSpinner from 'primevue/progressspinner';
import ProgressBar from 'primevue/progressbar';
import SelectButton from 'primevue/selectbutton';
import Dropdown from 'primevue/dropdown';
import Password from 'primevue/password';
import Divider from 'primevue/divider';
import InputNumber from 'primevue/inputnumber';
import InputSwitch from 'primevue/inputswitch';
import FileUpload from 'primevue/fileupload';
import Badge from 'primevue/badge';
import Skeleton from 'primevue/skeleton';
import DeferredContent from 'primevue/deferredcontent';
import ConfirmDialog from "primevue/confirmdialog";
import InputMask from "primevue/inputmask";
import Menu from 'primevue/menu';

export const initComponents = (app: App) => {
  app.use(ToastService);
  app.use(ConfirmationService);

  app.component('Card', Card);
  app.component('Calendar', Calendar);
  app.component('Message', Message);
  app.component('Menubar', Menubar);
  app.component('InputText', InputText);
  app.component('InputMask', InputMask);
  app.component('Textarea', Textarea);
  app.component('Button', Button);
  app.component('Checkbox', Checkbox);
  app.component('Toast', Toast);
  app.component('Panel', Panel);
  app.component('OverlayPanel', OverlayPanel);
  app.component('DataTable', DataTable);
  app.component('Column', Column);
  app.component('TabMenu', TabMenu);
  app.component('Tag', Tag);
  app.component('Accordion', Accordion);
  app.component('AccordionTab', AccordionTab);
  app.component('Image', Image);
  app.component('Dialog', Dialog);
  app.component('MultiSelect', MultiSelect);
  app.component('ProgressSpinner', ProgressSpinner);
  app.component('ProgressBar', ProgressBar);
  app.component('SelectButton', SelectButton);
  app.component('Dropdown', Dropdown);
  app.component('Password', Password);
  app.component('Divider', Divider);
  app.component('InputNumber', InputNumber);
  app.component('InputSwitch', InputSwitch);
  app.component('FileUpload', FileUpload);
  app.component('Badge', Badge);
  app.component('DeferredContent', DeferredContent);
  app.component('Skeleton', Skeleton);
  app.component('ConfirmDialog', ConfirmDialog);
  app.component('Menu', Menu);
};
