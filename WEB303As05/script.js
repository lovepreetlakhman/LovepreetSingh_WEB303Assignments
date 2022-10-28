/*
    Assignment 05
    Javascript 2
    Lovepreet Singh
    0796083
    27 October 2022
*/

$(document).ready(function () {
    class ContentItem{
        constructor(id, name, description, category){
            this.id = id;
            this.name = name;
            this.description = description;
            this.category = category;
        }

        updateContentItem(id, name, description, category){
            if (this.id !== id && !name && !description && !category){
                return;
            } else {
                this.name = name;
                this.description = description;
                this.category = category;
            }
        }

        toString(){
            const nameEl = document.createElement('h4');
            nameEl.textContent = this.name;
            
            const desEl = document.createElement('p');
            desEl.textContent = this.description;
            
            const catEl = document.createElement('div');
            catEl.textContent = this.category;

            const wrapperEl = document.createElement('div');
            wrapperEl.classList.add('content-item-wrapper');
            wrapperEl.id = `content-item-${this.id}`;
            wrapperEl.append(nameEl, desEl, catEl);  
            
            return wrapperEl;
        }
    }

    const smartphone1 = new ContentItem(1, 'iPhone 14 pro', 'The iPhone 14 Pro and iPhone 14 Pro Max are smartphones designed and marketed by Apple Inc. They are the sixteenth generation flagship iPhones', 'Flagship Smartphone');

    const smartphone2 = new ContentItem(2, 'Samsung S22 ultra', 'The Galaxy S22 series has a design similar to preceding S series phones, with an Infinity-O display containing a circular cutout in the top center for the front selfie camera.  The rear camera array on the S22 and S22+ has a metallic surround, while the S22 Ultra has a separate lens protrusion for each camera element.', 'Android Flagship Smartphone');
    
    const smartphone3 = new ContentItem(3, 'htc 10', 'The HTC 10 features an aluminum body with a unibody design. The dual front-facing audio speakers from previous HTC smartphones (such as the HTC One M9) have been removed.', 'Flagship smartphone');

    const smartphone4 = new ContentItem(4, 'iPhone 13 pro max ', 'The iPhone 13 Pro and iPhone 13 Pro Max are smartphones designed, developed, and marketed by Apple Inc. They are the flagship smartphones in the fifteenth generation of the iPhone, succeeding the iPhone 12 Pro and iPhone 12 Pro Max respectively.', 'Flagship smartphone');

    const smartphone5 = new ContentItem(5, 'Oneplus nord 2', 'The OnePlus Nord 2 5G is an Android-based smartphone manufactured by OnePlus, unveiled on 22 July 2021. It succeeds the original Nord, and is the sixth device in the Nord series.', 'Budget Smartphone');

    const smartphones = [smartphone1, smartphone2, smartphone3, smartphone4, smartphone5];

    smartphones.forEach(smartphone => {
        $('div#content-item-list').append(smartphone.toString());
    });

    $('.content-item-wrapper').css({
        'border' : '2px solid blue',
        'width' : '75%',
        'padding' : '4px 8px',
        'margin' : '4px auto'
    })
});