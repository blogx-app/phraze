import {
  DragDropContext,
  Droppable,
  Draggable,
  type DropResult,
} from "react-beautiful-dnd";
import { Box } from "../Box";
import { ForwardRefExoticComponent, RefAttributes, useState } from "react";

interface DndReorderProps<T> {
  id?: string;
  initialItems: T[];
  DraggableComponent: ForwardRefExoticComponent<
    Pick<any, string | number | symbol> & RefAttributes<unknown>
  >;
}

const NavigationReorder = <T extends { id: string }>({
  initialItems,
  DraggableComponent,
}: DndReorderProps<T>) => {
  const [items, setItems] = useState(initialItems);

  function handleOnDragEnd(result: DropResult) {
    if (!result.destination) return;

    const tempItems = Array.from(items);
    const [reorderedItem] = tempItems.splice(result.source.index, 1);
    tempItems.splice(result.destination.index, 0, reorderedItem);

    setItems(tempItems);
  }

  return (
    <Box>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <ul
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {items.map((item, index) => {
                return (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided) => (
                      <DraggableComponent
                        ref={provided.innerRef}
                        item={item}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      />
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
};

export default NavigationReorder;
