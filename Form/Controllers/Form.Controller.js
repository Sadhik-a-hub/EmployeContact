const { Form } = require('../Model/Form.Model')

module.exports = {
    async createEmployeeForm(req, res) {
        try {
            const create = await Form.create(req.body);
            res.status(201).json(create);
        } catch (error) {
            res.status(400).json({ errors: error.message });
        }
    },

    async getEmployeeForm(req, res) {
        try {
            const get = await Form.findAll();
            res.status(200).json(get);
        } catch (error) {
            res.status(400).json({ errors: error.message });
        }
        
    },

    async getbyidEmployeeForm(req, res) {
        try {
            const getAll = await Form.findByPk(req.params.id);
            res.status(200).json(getAll);
        } catch (error) {
            res.status(400).json({ errors: error.message });
        }
    },

    async putEmployeeForm(req, res) {
        try {
            const put = await Form.findByPk(req.params.id);
            if (!put) {
                return res.status(404).json({ message: "Employee_Details is not found" })
            }
            await put.update(req.body)
            res.json({ message: "Employee_details updated successfully", data: put });
        } catch (error) {
            res.status(400).json({ errors: error.message })
        }
    },

    async deleteEmployeeDetails(req, res) {
        try {
            const del = await Form.destroy({ where: { id: req.params.id } });
            res.status(202).json({ message: "employee_detail deleted successfully" });
        } catch (error) {
            res.status(400).json({ errors: error.message })
        }
    }

};