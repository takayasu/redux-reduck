import React,{Component,Fragment} from 'react';
import {connect} from 'react-redux';

import Table from '@material-ui/core/Table';
import {TableHead,TableRow,TableBody,TableCell} from '@material-ui/core'

class FriendList extends Component {

    render(){
        const rows = this.props.data;
        console.log(this.props);
        console.log("FriendList:",rows);

        return (
            <Fragment>
                <Table >
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.age}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </Fragment>
        );
    }

}

const mapStateToProps = (state) => {
    console.log("MapStateToProps:",state);
    return {data: state.findall_friend_reducer.data};
}

export default connect(mapStateToProps)(FriendList);
