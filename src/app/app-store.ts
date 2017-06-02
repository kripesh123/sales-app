import { Item } from './models/item.model';
import { User } from './models/user.model';
import { Widget } from './models/widget.model';

export interface AppStore{
    items: Item[],
    widgets: Widget[],
    users: User[]
}