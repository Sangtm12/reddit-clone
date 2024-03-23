import { Form } from "react-router-dom";

function UploadProfileImage() {
  return (
    <div className=" w-[30rem] p-8">
      <h3 className="text-xl border-b-[1px] border-border text-white py-3">
        Upload image
      </h3>
      <Form className="pt-8" method="post">
        <div className="flex flex-col mb-4">
          <label htmlFor="image" className="text-text-neutral pb-2">
            Choose image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="bg-background-dark p-2 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-orange w-full py-3 rounded-md font-bold"
        >
          Upload Image
        </button>
      </Form>
    </div>
  );
}

export default UploadProfileImage;
