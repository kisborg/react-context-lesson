import { createContext } from 'react';
import { getCollectionsForPreview } from './collections.utils';
import SHOP_DATA from './shop.data';

const CollectionsContext = createContext({
  collections: SHOP_DATA,
  collectionsForPreview: getCollectionsForPreview(SHOP_DATA),
});
const CollectionsProvider = ({children}) => {

}