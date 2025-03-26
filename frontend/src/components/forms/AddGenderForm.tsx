const AddGenderForm = () => {
  return (
    <div className="form-group col-md-3 mx-auto">
      <div className="mb-3">
        <label htmlFor="gender">Gender</label>
        <input type="text" className="form-control" id="gender" name="gender" />
      </div>
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-success">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddGenderForm;
