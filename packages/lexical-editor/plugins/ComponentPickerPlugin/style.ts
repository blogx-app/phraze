import styled from "@emotion/styled";

export const ComponentPickerMenu = styled.div`
  background: #fff;
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
  background-color: #fff;
  border: 0;

  &.selected {
    background: #eee;
  }

  &.active {
    display: flex;
    width: 20px;
    width: 20px;
    background-size: contain;
  }

  :first-child {
    border-radius: 8px 8px 0px 0px;
  }

  :last-child {
    border-radius: 0px 0px 8px 8px;
  }

  :hover {
    background-color: #eee;
  }

  :focus {
    background-color: #eee;
  }

  .text {
    display: flex;
    font-size: 0.875rem;
    line-height: 1.125;
    flex-grow: 1;
    min-width: 150px;
    margin-bottom: 0.25rem;
  }

  .description {
    font-size: 0.75rem;
    color: rgb(120, 119, 116);
  }

  .icon {
    display: flex;
    width: 24px;
    height: 24px;
    user-select: none;
    margin-right: 8px;
    line-height: 16px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const DescriptionText = styled.div`
  font-size: 0.75rem;
`;
