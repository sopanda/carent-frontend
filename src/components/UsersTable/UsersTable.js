import React, { PureComponent, Fragment } from "react";
import { Table as TableStrap } from "reactstrap";
import { TableHead, TableRowCell, TableRow } from "../MyTable/MyTable";
import styled from "styled-components";
import MyButton from "../MyButton/MyButton";
import { connect } from "react-redux";
import { deleteUserById } from "../../actions/user.actions";
import VerifyModal from "../Modals/VerifyModal/VerifyModal";
import { verifyUser, rejectUserVerification } from "../../actions/user.actions";

const Table = styled(TableStrap)`
  background-color: #082336 !important;
`;

class UsersTable extends PureComponent {
  constructor(props) {
    super(props);
    this.verifyUserModal = React.createRef();
  }

  onDeleteUser = id => {
    this.props.onUserDelete(id);
  };

  onVerifyUser = (id, doc) => {
    this.verifyUserModal.current.toggle();
    this.verifyUserModal.current.handleData(id, doc);
  };

  render() {
    const {
      users,
      verification,
      onRejectUserVerification,
      onVerifyUser
    } = this.props;
    return users ? (
      <Fragment>
        <Table>
          <thead>
            <tr>
              <TableHead>Id</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Surname</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Verified</TableHead>
            </tr>
          </thead>
          <tbody>
            {users.length
              ? users.map((user, i) => (
                  <TableRow key={i}>
                    <TableRowCell>{user.id}</TableRowCell>
                    <TableRowCell>{user.username}</TableRowCell>
                    <TableRowCell>{user.first_name}</TableRowCell>
                    <TableRowCell>{user.last_name}</TableRowCell>
                    <TableRowCell>{user.email}</TableRowCell>
                    <TableRowCell>{user.role}</TableRowCell>
                    <TableRowCell>{user.verified ? "yes" : "no"}</TableRowCell>
                    {!verification ? (
                      <TableRowCell>
                        {user.role !== "admin" ? (
                          <MyButton
                            title={"Delete"}
                            onClick={() => this.onDeleteUser(user.id)}
                          />
                        ) : null}
                      </TableRowCell>
                    ) : (
                      <TableRowCell>
                        {user.verified === false &&
                        user.verify_document !== null ? (
                          <MyButton
                            title={"Waiting verification"}
                            onClick={() =>
                              this.onVerifyUser(user.id, user.verify_document)
                            }
                          />
                        ) : null}
                      </TableRowCell>
                    )}
                  </TableRow>
                ))
              : null}
          </tbody>
        </Table>
        <VerifyModal
          ref={this.verifyUserModal}
          verifyUser={onVerifyUser}
          rejectUser={onRejectUserVerification}
        />
      </Fragment>
    ) : null;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUserDelete: id => dispatch(deleteUserById(id)),
    onVerifyUser: id => dispatch(verifyUser(id)),
    onRejectUserVerification: id => dispatch(rejectUserVerification(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(UsersTable);
