



const Calculator = ({ handleSubmit, handleChange, formData }) => {

  return (
    <div className="calculator-container w-full py-12 px-4 mt-8 flex justify-center bg-pattern">
        <div className="calculator-form-wrapper flex items-center justify-center w-11/12 max-w-md bg-light pt-12 pb-14 px-4 rounded-xl shadow-[10px_10px_#40B6AD] border-4 border-light-turq" id="calculator-form">
            <form onSubmit={handleSubmit} className="calculator">
                <h4 className="text-dark tracking-wider text-2xl pb-8 text-center">Enter Your Measurements</h4>
                    <div className="form--element flex items-center justify-center py-2 px-6">
                        <label htmlFor="shoulders"></label>
                        <input
                            value={formData.shoulders}
                            type="text"
                            name="shoulders"
                            placeholder="Shoulders"
                            onChange={handleChange}
                            required
                            className="w-11/12 p-4 rounded-lg text-center font-semibold text-base shadow-inner focus:ring-2 focus:ring-light-turq"
                            />
                    </div>
                    <div className="form--element flex items-center justify-center py-2 px-6">
                        <label htmlFor="waist"></label>
                        <input
                            value={formData.waist}
                            type="text"
                            name="waist"
                            placeholder="Waist"
                            onChange={handleChange}
                            required
                            className="w-11/12 p-4 rounded-lg text-center font-semibold text-base shadow-inner"
                            />
                    </div>
                    <div className="form--element flex items-center justify-center py-2 px-6">
                    <label htmlFor="hips"></label>
                        <input
                            value={formData.hips}
                            type="text"
                            name="hips"
                            placeholder="Hips"
                            onChange={handleChange}
                            required
                            className="w-11/12 p-4 rounded-lg text-center font-semibold text-base shadow-inner"
                            />
                    </div>
                    <button
                    className="calculate-btn mt-12 w-full bg-light-turq text-light border-none py-5 px-8 rounded-lg tracking-wider text-xl uppercase cursor-pointer transition ease-out duration-300 hover:shadow-3xl hover:transition hover:ease-in hover:duration-300"
                    >Calculate
                    </button>
            </form>

        </div>
    </div>
  )
}

export default Calculator