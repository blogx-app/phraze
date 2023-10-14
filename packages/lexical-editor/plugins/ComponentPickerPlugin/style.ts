import styled from "@emotion/styled";

export const ComponentPickerMenu = styled.div`
  background: rgb(37, 37, 37);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  margin-top: 25px;

  width: 336px;

  padding: 8px 4px;
`;

export const ComponentPickerMenuList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
  border-radius: 8px;
  max-height: 336px;
  overflow-y: scroll;

  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ComponentPickerMenuListItem = styled.li`
  margin: 0;
  min-width: 180px;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  border-radius: 8px;

  padding: 8px;
  color: #050505;
  cursor: pointer;
  line-height: 16px;
  font-size: 15px;
  display: flex;
  align-content: center;
  flex-direction: row;
  flex-shrink: 0;
  background-color: rgba(37, 37, 37);
  border: 0;
  user-select: none;

  &.selected {
    background: rgba(45, 45, 45);
  }

  &.active {
    display: flex;
    width: 20px;
    width: 20px;
    background-size: contain;
  }

  :first-of-type {
    border-radius: 8px 8px 0px 0px;
  }

  :last-child {
    border-radius: 0px 0px 8px 8px;
  }

  :hover {
    background-color: rgba(45, 45, 45);
  }

  :focus {
    background-color: rgba(45, 45, 45);
  }

  .icon-container {
    background-color: white;
    padding: 10px;
    border-radius: 3px;
    margin-right: 8px;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .text {
    color: rgba(255, 255, 255, 0.81);
    font-size: 0.875rem;
    line-height: 1.125;
    margin-bottom: 2px;
  }

  .description {
    font-size: 0.75rem;
    color: rgb(127, 127, 127);
  }

  .icon {
    display: flex;
    width: 24px;
    height: 24px;
    margin: auto;
    user-select: none;
    line-height: 16px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const DescriptionText = styled.div`
  font-size: 0.75rem;
`;
