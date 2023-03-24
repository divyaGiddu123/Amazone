import { useState } from 'react';
import { useDrop, useDrag } from 'react-dnd';
import { ItemTypes } from '../constants/ItemTypes';
import styles from './styles.module.css';

interface Props {
  folders: string[];
}

interface DragItem {
  index: number;
  type: string;
}

const FolderList: React.FC<Props> = ({ folders }) => {
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const [, drop] = useDrop({
    accept: ItemTypes.FOLDER,
    drop(item: DragItem, monitor) {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }
      const { index: dragIndex } = item;
      setDragIndex(null);
      console.log('Dropped folder', dragIndex);
    },
    hover(item: DragItem, monitor) {
      const { index: dragIndex } = item;
      const hoverIndex = folders.indexOf(item);
      if (dragIndex === hoverIndex) {
        return;
      }
      setDragIndex(hoverIndex);
    },
  });

  const [, drag, preview] = useDrag({
    item: { type: ItemTypes.FOLDER, index: dragIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const getFolderClassName = (index: number) => {
    if (index === dragIndex) {
      return `${styles.folder} ${styles.dragging}`;
    }
    return styles.folder;
  };

  return (
    <div ref={drop}>
      {folders.map((folder, index) => (
        <div key={folder} className={getFolderClassName(index)} ref={preview}>
          <div className={styles.folderTitle} ref={drag}>
            {folder}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FolderList;
