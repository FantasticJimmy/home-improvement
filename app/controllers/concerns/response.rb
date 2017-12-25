module Response
    def json_response(object, status = :ok)
        render json: object, status: status
    end

    def error_response(object,status = :bad_request)
        if object.nil?
            render nothing: true, status: status            
        else
            render json: object.errors.messages.flatten.join(', '), status: status
        end
    end
end