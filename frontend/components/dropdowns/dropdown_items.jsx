// import React from 'react';
//
// class DropdownItems extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = { selected: null };
//   }
//
//   selectItem(item){
//     this.setState({ selected: item });
//     this.props.onChange(item);
//   }
//
//   render(){
//     let items;
//     items = this.props.items.map((item, index) => {
//       return (
//         <li onClick={this.selectItem(item)} key={index}>{item}</li>
//       );
//     });
//
//     return (
//       <ul className="selected-fields">
//         {items}
//       </ul>
//     );
//   }
// }
//
// export default DropdownItems;
